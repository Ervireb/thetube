import React from 'react';
import './AddComment.scss';
import { Form, Image, TextArea } from 'semantic-ui-react';

export function AddComment() {
  return (
    <div className="add-comment">
      <Image
        className="user-image"
        src="https://placehold.in/48x48.png"
        circular
      />
      <Form>
        <Form.TextArea
          control={TextArea}
          autoHeight
          placeholder="Add a public comment"
        />
      </Form>
    </div>
  );
}
