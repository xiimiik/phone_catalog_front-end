import { ReactNode } from "react";
import s from './PageSection.module.scss';

type Props = {
  children: ReactNode,
};

export const PageSection: React.FC<Props> = ({children}) => {
  return (
    <div className={s.section}>
      {children}
    </div>
  );
};