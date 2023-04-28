import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShapeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShapeOffIcon = React.forwardRef<SVGSVGElement, TablerShapeOffIconProps>(function TablerShapeOffIcon(
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
			<path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" />
			<path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17.574 17.598a2 2 0 0 0 2.826 2.83" />
			<path d="M5 7v10" />
			<path d="M9 5h8" />
			<path d="M7 19h10" />
			<path d="M19 7v8" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShapeOffIcon.displayName = "TablerShapeOffIcon";
}
