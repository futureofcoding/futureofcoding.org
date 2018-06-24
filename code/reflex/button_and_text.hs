{-# LANGUAGE OverloadedStrings, RecursiveDo, ScopedTypeVariables, FlexibleContexts, TypeFamilies, ConstraintKinds #-}

import Prelude hiding (mapM, mapM_, all, sequence)

import Control.Monad hiding (mapM, mapM_, forM, forM_, sequence)
import Control.Monad.Fix
import Data.Map (Map)
import qualified Data.Map as Map
import Data.Foldable
import Data.Monoid ((<>))
import Data.Text (Text)
import qualified Data.Text as T

import GHCJS.DOM.Types (JSM)

import Reflex
import Reflex.Dom.Core
import Data.Text.Encoding (encodeUtf8)


main = mainWidget app

evenButton :: [Int] -> Bool
evenButton [] = False
evenButton [x] = even x

dynListToMap :: (Ord k, (Functor (Dynamic t))) => Dynamic t [k] -> Dynamic t (Map k k)
dynListToMap l = ffor l (Map.fromList . (map $ \x -> (x, x)))

listListView :: (Ord k, (Functor (Dynamic t)), Adjustable t m, PostBuild t m, MonadFix m, MonadHold t m) => Dynamic t [k] -> (k -> Dynamic t k -> m (Event t a)) -> m (Event t [k])
listListView l = do
  events <- listViewWithKey $ dynListToMap l
  return (fmap (fmap Map.keys) events)

dynTextButton :: (Adjustable t m, PostBuild t m, MonadFix m, MonadHold t m, DomBuilder t m, Show a) => Dynamic t a -> m (Event t ())
dynTextButton dynString = do
  rec
    (el,_) <- el' "button" $ do
      dynText $ fmap (T.pack . show) dynString
  return (domEvent Click el)

app :: ( DomBuilder t m , DomBuilderSpace m ~ GhcjsDomSpace , MonadFix m , MonadHold t m, PostBuild t m) => m ()
app = do
  
  rec
      countedClicks <- foldDyn (\a b -> if evenButton a then b + 2 else b) 2 clicks

      clicks <- listListView (ffor countedClicks (\n -> [1..n])) (\ _ x -> dynTextButton x)
      

  return ()
  
