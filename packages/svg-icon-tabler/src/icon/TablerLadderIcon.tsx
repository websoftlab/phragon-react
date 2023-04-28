import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLadderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLadderIcon = React.forwardRef<SVGSVGElement, TablerLadderIconProps>(function TablerLadderIcon(
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
			<path d="M8 3v18" />
			<path d="M16 3v18" />
			<path d="M8 14h8" />
			<path d="M8 10h8" />
			<path d="M8 6h8" />
			<path d="M8 18h8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLadderIcon.displayName = "TablerLadderIcon";
}
