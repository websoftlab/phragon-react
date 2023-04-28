import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber3Icon = React.forwardRef<SVGSVGElement, TablerNumber3IconProps>(function TablerNumber3Icon(
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
			<path d="M12 12a4 4 0 1 0 -4 -4" />
			<path d="M8 16a4 4 0 1 0 4 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber3Icon.displayName = "TablerNumber3Icon";
}
