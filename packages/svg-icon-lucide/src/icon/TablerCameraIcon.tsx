import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraIcon = React.forwardRef<SVGSVGElement, TablerCameraIconProps>(function TablerCameraIcon(
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
			<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
			<path d="M15 13 A3 3 0 0 1 12 16 A3 3 0 0 1 9 13 A3 3 0 0 1 15 13" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCameraIcon.displayName = "TablerCameraIcon";
}
