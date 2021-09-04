/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isSeparator?: boolean;
}

export interface PageDataContextModel {
  pageTitle?: string;
  setPageTitle: (_title: string) => void;
  showTitle?: boolean;
  setShowTitle: (_showTitle: boolean) => void;
  pageDescription?: string;
  setPageDescription: (_description: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
}

const PageDataContext = createContext<PageDataContextModel>({
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
  setShowTitle: (_showTitle: boolean) => {}
});

const PageDataProvider: React.FC = ({ children }) => {
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageDescription, setPageDescription] = useState<string>('');
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const value: PageDataContextModel = {
    pageTitle,
    setPageTitle,
    showTitle,
    setShowTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs
  };
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  );
};

function usePageData() {
  return useContext(PageDataContext);
}

type Props = {
  description?: string;
  breadcrumbs?: Array<PageLink>;
  showTitle?: boolean;
};

const PageTitle: FC<Props> = ({
  children,
  description,
  breadcrumbs,
  showTitle
}) => {
  const { setPageTitle, setPageDescription, setPageBreadcrumbs, setShowTitle } =
    usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle('');
    };
  }, [children]);

  useEffect(() => {
    if (description) {
      setPageDescription(description);
    }
    return () => {
      setPageDescription('');
    };
  }, [description]);

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }
    return () => {
      setPageBreadcrumbs([]);
    };
  }, [breadcrumbs]);

  useEffect(() => {
    if (showTitle) {
      setShowTitle(showTitle);
    }
    return () => {
      setShowTitle(false);
    };
  }, [showTitle]);

  return <></>;
};

const PageDescription: React.FC = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription('');
    };
  }, [children]);
  return <></>;
};

export { PageDescription, PageTitle, PageDataProvider, usePageData };
