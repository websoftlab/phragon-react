import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInspectIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInspectIcon = React.forwardRef<SVGSVGElement, TablerInspectIconProps>(function TablerInspectIcon(
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
			<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
			<path d="m12 12 4 10 1.7-4.3L22 16Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerInspectIcon.displayName = "TablerInspectIcon";
}
