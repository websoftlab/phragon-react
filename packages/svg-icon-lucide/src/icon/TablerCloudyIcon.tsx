import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCloudyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCloudyIcon = React.forwardRef<SVGSVGElement, TablerCloudyIconProps>(function TablerCloudyIcon(
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
			<path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
			<path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCloudyIcon.displayName = "TablerCloudyIcon";
}
