interface IPrivateRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  header?: any;
  footer?: any;
  isHasFooter?: boolean;
  isHasHeader?: boolean;
  titleHeader?: string;
  typeHeader?: number;
  isHasGradiant?: boolean;
  backPath?: string;
  withoutAvatar?: boolean;
}

interface IPublicRouter {
  component: any;
  layout: any;
  exact?: boolean;
  path?: string;
  header?: any;
  footer?: any;
  isHasFooter?: boolean;
  isHasHeader?: boolean;
  titleHeader?: string;
  typeHeader?: number;
}
