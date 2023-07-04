import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

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
            onClick={() => openForm(activity?.id)}
          />
          <Button
            onClick={cancelSelectedActivity}
            basic
            color='grey'
            content='Cancel'
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
