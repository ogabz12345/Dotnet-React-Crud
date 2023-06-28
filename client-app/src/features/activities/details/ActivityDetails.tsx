import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
}

const ActivityDetails = ({
  activity,
  cancelSelectedActivity,
  openForm,
}: Props) => {
  return (
    <Card fluid>
      <Image src={`/assets/images/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths='2'>
          <Button
            basic
            color='blue'
            content='Edit'
            onClick={() => openForm(activity.id)}
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
