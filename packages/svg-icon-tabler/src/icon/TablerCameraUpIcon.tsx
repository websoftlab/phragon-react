import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCameraUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCameraUpIcon = React.forwardRef<SVGSVGElement, TablerCameraUpIconProps>(function TablerCameraUpIcon(
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
			<path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
			<path d="M12 16a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCameraUpIcon.displayName = "TablerCameraUpIcon";
}
