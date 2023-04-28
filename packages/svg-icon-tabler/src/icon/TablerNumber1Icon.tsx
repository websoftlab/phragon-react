import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber1Icon = React.forwardRef<SVGSVGElement, TablerNumber1IconProps>(function TablerNumber1Icon(
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
			<path d="M13 20v-16l-5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber1Icon.displayName = "TablerNumber1Icon";
}
