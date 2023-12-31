import { Button, Form, Segment } from 'semantic-ui-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';

const ActivityForm = () => {
  const { activityStore } = useStore();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    loading,
    createActivity,
    updateActivity,
    loadingInitial,
    loadActivity,
  } = activityStore;

  const [activity, setActivity] = useState<Activity>({
    id: '',
    date: '',
    category: '',
    title: '',
    description: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  const handleSubmit = () => {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  };

  const handleInputElement = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };
  if (loadingInitial) return <LoadingComponent content='Loading activity...' />;
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          placeholder='Title'
          value={activity.title}
          name='title'
          onChange={handleInputElement}
        />
        <Form.TextArea
          placeholder='Description'
          value={activity.description}
          name='description'
          onChange={handleInputElement}
        />
        <Form.Input
          placeholder='Category'
          value={activity.category}
          name='category'
          onChange={handleInputElement}
        />
        <Form.Input
          type='date'
          placeholder='Date'
          value={activity.date}
          name='date'
          onChange={handleInputElement}
        />
        <Form.Input
          placeholder='City'
          value={activity.city}
          name='city'
          onChange={handleInputElement}
        />
        <Form.Input
          placeholder='Venue'
          value={activity.venue}
          name='venue'
          onChange={handleInputElement}
        />
        <Button
          floated='right'
          positive
          type='submit'
          content='Submit'
          loading={loading}
        />
        <Button
          as={Link}
          to={`/activities`}
          floated='right'
          type='button'
          content='Cancel'
        />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
