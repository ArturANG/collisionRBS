// Copyright 2013-2021, University of Colorado Boulder

/**
 * Module that includes all Scenery dependencies, so that requiring this module will return an object
 * that consists of the entire exported 'scenery' namespace API.
 *
 * The API is actually generated by the 'scenery' module, so if this module (or all other modules) are
 * not included, the 'scenery' namespace may not be complete.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import './accessibility/pdom/PDOMFuzzer.js';
import './accessibility/pdom/PDOMInstance.js';
import './accessibility/pdom/PDOMPeer.js';
import './accessibility/pdom/PDOMTree.js';
import './accessibility/pdom/PDOMUtils.js';
import './accessibility/voicing/Voicing.js';
import './accessibility/voicing/voicingManager.js';
import './accessibility/voicing/webSpeaker.js';
import './accessibility/reader/Cursor.js';
import './accessibility/reader/Reader.js';
import './debug/DebugContext.js';
import './display/BackboneDrawable.js';
import './display/Block.js';
import './display/CanvasBlock.js';
import './display/CanvasSelfDrawable.js';
import './display/ChangeInterval.js';
import './display/DOMBlock.js';
import './display/DOMSelfDrawable.js';
import './display/Display.js';
import './display/Drawable.js';
import './display/Fittability.js';
import './display/FittedBlock.js';
import './display/GreedyStitcher.js';
import './display/InlineCanvasCacheDrawable.js';
import './display/Instance.js';
import './display/PaintObserver.js';
import './display/PaintSVGState.js';
import './display/RebuildStitcher.js';
import './display/RelativeTransform.js';
import './display/Renderer.js';
import './display/SVGBlock.js';
import './display/SVGGroup.js';
import './display/SVGSelfDrawable.js';
import './display/SelfDrawable.js';
import './display/SharedCanvasCacheDrawable.js';
import './display/Stitcher.js';
import './display/WebGLBlock.js';
import './display/WebGLSelfDrawable.js';
import './display/drawables/CanvasNodeDrawable.js';
import './display/drawables/CircleCanvasDrawable.js';
import './display/drawables/CircleDOMDrawable.js';
import './display/drawables/CircleSVGDrawable.js';
import './display/drawables/CircleStatefulDrawable.js';
import './display/drawables/DOMDrawable.js';
import './display/drawables/ImageCanvasDrawable.js';
import './display/drawables/ImageDOMDrawable.js';
import './display/drawables/ImageSVGDrawable.js';
import './display/drawables/ImageStatefulDrawable.js';
import './display/drawables/ImageWebGLDrawable.js';
import './display/drawables/LineCanvasDrawable.js';
import './display/drawables/LineSVGDrawable.js';
import './display/drawables/LineStatefulDrawable.js';
import './display/drawables/LineStatelessDrawable.js';
import './display/drawables/PaintableStatefulDrawable.js';
import './display/drawables/PaintableStatelessDrawable.js';
import './display/drawables/PathCanvasDrawable.js';
import './display/drawables/PathSVGDrawable.js';
import './display/drawables/PathStatefulDrawable.js';
import './display/drawables/RectangleCanvasDrawable.js';
import './display/drawables/RectangleDOMDrawable.js';
import './display/drawables/RectangleSVGDrawable.js';
import './display/drawables/RectangleStatefulDrawable.js';
import './display/drawables/RectangleWebGLDrawable.js';
import './display/drawables/SpritesCanvasDrawable.js';
import './display/drawables/SpritesWebGLDrawable.js';
import './display/drawables/TextCanvasDrawable.js';
import './display/drawables/TextDOMDrawable.js';
import './display/drawables/TextSVGDrawable.js';
import './display/drawables/TextStatefulDrawable.js';
import './display/drawables/WebGLNodeDrawable.js';
import './input/BatchedDOMEvent.js';
import './input/BrowserEvents.js';
import './input/ButtonListener.js';
import './input/DownUpListener.js';
import './input/Input.js';
import './input/Mouse.js';
import './input/Pen.js';
import './input/Pointer.js';
import './input/SceneryEvent.js';
import './input/SimpleDragHandler.js';
import './input/Touch.js';
import './layout/Divider.js';
import './layout/FlowBox.js';
import './layout/FlowCell.js';
import './layout/FlowConfigurable.js';
import './layout/FlowConstraint.js';
import './layout/GridBox.js';
import './layout/GridCell.js';
import './layout/GridConfigurable.js';
import './layout/GridConstraint.js';
import './layout/HDivider.js';
import './layout/WidthSizable.js';
import './layout/LayoutConstraint.js';
import './layout/LayoutProxy.js';
import './layout/ManualConstraint.js';
import './layout/VDivider.js';
import './layout/HeightSizable.js';
import './listeners/DragListener.js';
import './listeners/FireListener.js';
import './listeners/HandleDownListener.js';
import './listeners/KeyboardDragListener.js';
import './listeners/MultiListener.js';
import './listeners/PanZoomListener.js';
import './listeners/PressListener.js';
import './nodes/AlignBox.js';
import './nodes/AlignGroup.js';
import './nodes/CanvasNode.js';
import './nodes/Circle.js';
import './nodes/DOM.js';
import './nodes/HBox.js';
import './nodes/HStrut.js';
import './nodes/Image.js';
import './nodes/Leaf.js';
import './nodes/Line.js';
import './nodes/Node.js';
import './nodes/Paintable.js';
import './nodes/Path.js';
import './nodes/Plane.js';
import './nodes/Rectangle.js';
import './nodes/RichText.js';
import './nodes/Spacer.js';
import './nodes/Sprites.js';
import './nodes/Text.js';
import './nodes/VBox.js';
import './nodes/VStrut.js';
import './nodes/WebGLNode.js';
import './overlays/CanvasNodeBoundsOverlay.js';
import './overlays/FittedBlockBoundsOverlay.js';
import './overlays/HighlightOverlay.js';
import './overlays/PointerAreaOverlay.js';
import './overlays/PointerOverlay.js';
import scenery from './scenery.js';
import './util/Brightness.js';
import './util/CanvasContextWrapper.js';
import './util/Color.js';
import './util/ColorDef.js';
import './util/Contrast.js';
import './util/CountMap.js';
import './util/DisplayedProperty.js';
import './util/DropShadow.js';
import './util/Features.js';
import './util/Filter.js';
import './util/Font.js';
import './util/FullScreen.js';
import './util/GaussianBlur.js';
import './util/Gradient.js';
import './util/Grayscale.js';
import './util/HueRotate.js';
import './util/Invert.js';
import './util/LinearGradient.js';
import './util/Opacity.js';
import './util/Paint.js';
import './util/PaintColorProperty.js';
import './util/PaintDef.js';
import './util/Pattern.js';
import './util/Picker.js';
import './util/RadialGradient.js';
import './util/RendererSummary.js';
import './util/Saturate.js';
import './util/SceneImage.js';
import './util/SceneryStyle.js';
import './util/Sepia.js';
import './util/ShaderProgram.js';
import './util/Sprite.js';
import './util/SpriteImage.js';
import './util/SpriteInstance.js';
import './util/SpriteSheet.js';
import './util/TextBounds.js';
import './util/Trail.js';
import './util/TrailPointer.js';
import './util/TransformTracker.js';
import './util/Utils.js';

// note: we don't need any of the other parts, we just need to specify them as dependencies so they fill in the scenery namespace
export default scenery;