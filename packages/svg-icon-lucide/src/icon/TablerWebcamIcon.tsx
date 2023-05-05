import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWebcamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWebcamIcon = React.forwardRef<SVGSVGElement, TablerWebcamIconProps>(function TablerWebcamIcon(
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
			<path d="M20 10 A8 8 0 0 1 12 18 A8 8 0 0 1 4 10 A8 8 0 0 1 20 10" />
			<path d="M15 10 A3 3 0 0 1 12 13 A3 3 0 0 1 9 10 A3 3 0 0 1 15 10" />
			<path d="M7 22h10" />
			<path d="M12 22v-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWebcamIcon.displayName = "TablerWebcamIcon";
}
