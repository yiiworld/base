<?php
/**
 * JScrollPaneAssetBundle.php
 * @author Revin Roman
 * @link https://rmrevin.com
 */

namespace cookyii\assets\jquery;

/**
 * Class JScrollPaneAssetBundle
 * @package cookyii\assets\jquery
 */
class JScrollPaneAssetBundle extends \yii\web\AssetBundle
{

    public $sourcePath = '@bower';

    public $js = [
        'jscrollpane/script/jquery.jscrollpane.min.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'cookyii\assets\jquery\MouseWheelAssetBundle',
    ];
}