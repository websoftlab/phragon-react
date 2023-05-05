import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLaughIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLaughIcon = React.forwardRef<SVGSVGElement, TablerLaughIconProps>(function TablerLaughIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
			<path d="M9 9 L9.01 9" />
			<path d="M15 9 L15.01 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLaughIcon.displayName = "TablerLaughIcon";
}
