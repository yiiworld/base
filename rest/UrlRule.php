<?php
/**
 * UrlRule.php
 * @author Revin Roman
 */

namespace components\rest;

/**
 * Class UrlRule
 * @package components\rest
 */
class UrlRule extends \yii\rest\UrlRule
{

    /**
     * @inheritdoc
     */
    public $patterns = [
        'DELETE {id}' => 'delete',
        'PATCH {id}' => 'restore',
        'POST activate/{id}' => 'activate',
        'POST deactivate/{id}' => 'deactivate',
        'PUT {id}' => 'update',
        'POST' => 'create',
        'GET,HEAD detail/{id}' => 'detail',
        'GET,HEAD {id}' => 'view',
        'GET,HEAD' => 'index',
        '{id}' => 'options',
        '' => 'options',
    ];
}