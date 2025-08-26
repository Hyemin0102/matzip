import {NavigatorScreenParams} from '@react-navigation/native';

export type MapStackParamList = {
  MapHome: undefined;
  AddLocation: undefined;
  SearchLocation: undefined;
};

export type AuthStackParamList = {
  AuthHome: undefined;
  Login: undefined;
  Singup: undefined;
};

export type FeedStackParamList = {
  FeedList: undefined;
  FeedDetail: {id: number};
  FeedFavorite: undefined;
  editLocation: {id: number};
};

export type MainDrawerParamList = {
  Map: NavigatorScreenParams<MapStackParamList>;
  Feed: NavigatorScreenParams<FeedStackParamList>;
  Calendar: undefined;
};

//MainDrawerParamList 를 RootParamList 에 확장시킴
declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainDrawerParamList {}
  }
}
