import LinkStyles from '../styles/Links.module.scss';

export default function InlineLink({ children, href, to }) {
  return (
    <a className={LinkStyles.link} href={href || to} rel="noopener">
      {children}
    </a>
  );
}
