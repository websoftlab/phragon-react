import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFilmIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFilmIcon = React.forwardRef<SVGSVGElement, FeatherFilmIconProps>(function FeatherFilmIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
			<line x1="7" y1="2" x2="7" y2="22" />
			<line x1="17" y1="2" x2="17" y2="22" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<line x1="2" y1="7" x2="7" y2="7" />
			<line x1="2" y1="17" x2="7" y2="17" />
			<line x1="17" y1="17" x2="22" y2="17" />
			<line x1="17" y1="7" x2="22" y2="7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherFilmIcon.displayName = "FeatherFilmIcon";
}
