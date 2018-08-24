import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Categories from '../../categories/components/categories';
import ModalContainer from './modal-container';
import Modal from './modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import data from '../../api.json';

class Home extends Component {
  constructor (props) {
    super(props);
    this.props.categories = data.categories;
  }

  state = {
    modalVisible: false
  }

  toggleModal = (media) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      media
    });
  }

  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Navbar>
            Platzi Video
          </Navbar>
          <Main>
            <Categories categories={this.props.categories} openModal={this.toggleModal} />
          </Main>

          <ModalContainer visible={this.state.modalVisible}>
            {
              this.state.modalVisible &&
              <Modal handleOnClose={this.toggleModal}>
                <VideoPlayer video={this.state.media} />
              </Modal>
            }
          </ModalContainer>
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;
