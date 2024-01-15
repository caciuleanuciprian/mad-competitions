export interface NavLinkProps {
  to: string;
  label: string;
  hasBorderRight?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}
