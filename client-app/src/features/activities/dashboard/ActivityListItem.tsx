import { Link } from 'react-router-dom';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity;
}

const ActivityListItem = ({ activity }: Props) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src='/assets//images/user.png'
            ></Item.Image>

            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> {activity.date}
          <Icon name='marker' /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendeees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          color='teal'
          content='view'
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
