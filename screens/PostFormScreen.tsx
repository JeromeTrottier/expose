import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ExposePostForm, PostFormScreenProps } from '../types'
import FormInput from '../components/FormInput';
import { Icon } from '@rneui/themed';
import Title from '../components/Title';
import ImagePickerButton from '../components/ImagePickerButton';
import FormButton from '../components/FormButton';
import { windowWidth } from '../utils/Dimensions';
import { createPost } from '../models/user-model';
import { UserContext } from '../contexts/userContext';

const PostFormScreen = ({route, navigation}: PostFormScreenProps) => {
  const user = useContext(UserContext);

  const [postState, setPostState] = useState<ExposePostForm>({
    title: '',
    description: '',
    imageURI: '',
    exposerID: '',
    authorID: ''
  });

  useEffect(() => {
    const authorID = route.params.authorID;
    const exposerID = user?.user.uid;

    if (authorID && exposerID) {
      setPostState({...postState, exposerID: exposerID, authorID: authorID});
    }
  }, []);

  const handleCreatePost = () => {
    console.log(postState);
    
    if (postState.title == '') {alert('no title'); return;}
    if (postState.description == '') {alert('no desc'); return;}
    if (postState.imageURI == '') {alert('no image'); return;}
    if(postState.exposerID == ''){alert('no exposer'); return;}
    if(postState.authorID == '' ){alert('no author'); return;}

    createPost(postState);

    alert('Post created!');

  }

  return (
    <View>
      <Title
        label='Creation de post'
      />
      <FormInput
        placeholder='Titre'
        labelValue={postState.title}
        onChangeText={(text) => {setPostState({...postState, title: text})}}
        iconComponent={
          <Icon
            name='title'
          />
        }
      />
      <FormInput
        placeholder='Description'
        labelValue={postState.description}
        onChangeText={(text) => {setPostState({...postState, description: text})}}
        iconComponent={
          <Icon
            name='description'
          />
        }
      />
      <ImagePickerButton
        onImageChosen={(uri) => {setPostState({...postState, imageURI: uri})}}
        style={{width: windowWidth - 50, height: windowWidth - 50}}
      />
      <FormButton
        title='Créer'
        onPress={handleCreatePost}
      />
    </View>
  )
}

export default PostFormScreen

const styles = StyleSheet.create({})