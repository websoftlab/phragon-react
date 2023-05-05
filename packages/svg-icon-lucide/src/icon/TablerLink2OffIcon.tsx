import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLink2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLink2OffIcon = React.forwardRef<SVGSVGElement, TablerLink2OffIconProps>(function TablerLink2OffIcon(
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
			<path d="M9 17H7A5 5 0 0 1 7 7" />
			<path d="M15 7h2a5 5 0 0 1 4 8" />
			<path d="M8 12 L12 12" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLink2OffIcon.displayName = "TablerLink2OffIcon";
}
