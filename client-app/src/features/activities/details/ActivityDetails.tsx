import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);
  
  if(loadingInitial || !activity) return <LoadingComponent content='Loading...'/>
  return (
    <Card fluid>
      <Image src={`/assets/images/categoryImages/${activity?.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity?.title}</Card.Header>
        <Card.Meta>
          <span>{activity?.date}</span>
        </Card.Meta>
        <Card.Description>{activity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths='2'>
          <Button
            basic
            color='blue'
            content='Edit'
            as={Link}
            to={`/manage/${activity?.id}`}
          />
          <Button
            as={Link}
            to={`/activities`}
            basic
            color='grey'
            content='Cancel'
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
