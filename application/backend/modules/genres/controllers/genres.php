<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Genres extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Genres_model');
    }

    /**
    *
    * Получает список жанров
    *
    * @return json encoded array (items)
    */
    public function read() {
        $limit = $this->input->get('limit', TRUE) > '' ? $this->input->get('limit', TRUE) : 45;
        $offset = $this->input->get('start', TRUE);

        $sorts = json_decode($this->input->get('sort', TRUE));
        if ($sorts) {
            foreach ($sorts as $sort) {
                $orders[] = $sort->property.' '.$sort->direction;
            }
            $order_by = implode(', ', $orders);
            } else {
                $order_by = 'id asc';
        }

        $total_entries = $this->Genres_model->count_all_entries($filter = array());
        $entries = $this->Genres_model->get_all_entries($filter = array(), $limit, $offset, $order_by);

        $data['success'] = true;
        $data['total'] = $total_entries;
        $data['items'] = $entries;

        extjs_output($data);
    }
}