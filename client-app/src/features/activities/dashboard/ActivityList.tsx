import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

const ActivityList = () => {
  const [target, setTarget] = useState('');
  const { activityStore } = useStore();
  const { deleteActivity, loading, activitiesByDate } = activityStore;
  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>

              <Item.Extra>
                <Button
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated='right'
                  content='Delete'
                  name={activity.id}
                  loading={loading && target === activity.id}
                  color='red'
                />
                <Button
                  onClick={() => activityStore.selectActivity(activity.id)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
