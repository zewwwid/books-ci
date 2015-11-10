<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Books extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('Books_model');
    }

    /**
    *
    * Создает новую книгуm
    *
    * @return json encoded array (boolean)
    */
    public function create() {
        $items = json_decode($this->input->post('items'));
        $item_data = array(
            'genre' => $items->genre,
            'author' => $items->author,
            'title' => $items->title,
            'year' => $items->year
        );

        $insert = $this->Books_model->insert_entry($item_data);
        if (intval($insert)) {
            $item_data['id'] = $insert;
            $data['success'] = true;
            $data['total'] = 1;
            $data['items'] = $item_data;
        } else {
            $data['success'] = false;
            $data['title'] = 'Ошибка';
            $data['message'] = 'Ошибка';
        }
        echo json_encode($data);
    }

    /**
    *
    * Получает список всех книг
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

        $total_entries = $this->Books_model->count_all_entries($filter = array());
        $entries = $this->Books_model->get_all_entries($filter = array(), $limit, $offset, $order_by);

        $data['success'] = true;
        $data['total'] = $total_entries;
        $data['items'] = $entries;

        extjs_output($data);
    }

    /**
    *
    * Обновляет книгу
    *
    * @return json encoded array (boolean)
    */

    public function update() {
        $items = json_decode($this->input->post('items'));

        $filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $items->id ? $items->id : ''
            )
        );

        $item_data = array(
            'genre' => $items->genre,
            'author' => $items->author,
            'title' => $items->title,
            'year' => $items->year
        );

        $insert = $this->Books_model->update_entry($filter, $item_data);
        if (intval($insert)) {
            $data['success'] = true;
            $data['total'] = 1;
            $data['items'] = $item_data;
        } else {
            $data['success'] = false;
            $data['title'] = 'Ошибка';
            $data['message'] = 'Ошибка';
        }

        echo json_encode($data);
    }

    /**
    *
    * Удаляет книгу
    *
    * @return json encoded array (boolean)
    */
    public function destroy() {
        $items = json_decode($this->input->post('items'));

        if(is_array($items)){
            foreach ($items as $item)
            {
                if(!$this->destroyItem($item))
                {
                    $data['success'] = false;
                    $data['title'] = 'Ошибка';
                    $data['message'] = 'Ошибка';
                    extjs_output($data, 'html');
                    return;
                }
            }
        } else {
            if(!$this->destroyItem($items))
            {
                $data['success'] = false;
                $data['title'] = 'Ошибка';
                $data['message'] = 'Ошибка';
                extjs_output($data, 'html');
                return;
            }
        }

        $data['success'] = true;
        extjs_output($data, 'html');
    }
    
    private function destroyItem($item)
    {
        $filter = array(
            array(
                'field' => 'id',
                'operator' => '=',
                'value' => $item->id ? $item->id : ''
            )
        );
        
        return $this->Books_model->delete_enry($filter);
    }
}