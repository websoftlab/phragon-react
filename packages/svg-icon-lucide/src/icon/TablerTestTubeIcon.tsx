import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestTubeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestTubeIcon = React.forwardRef<SVGSVGElement, TablerTestTubeIconProps>(function TablerTestTubeIcon(
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
			<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
			<path d="M8.5 2h7" />
			<path d="M14.5 16h-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTestTubeIcon.displayName = "TablerTestTubeIcon";
}
