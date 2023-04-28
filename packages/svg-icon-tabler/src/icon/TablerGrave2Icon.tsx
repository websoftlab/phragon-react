import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrave2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrave2Icon = React.forwardRef<SVGSVGElement, TablerGrave2IconProps>(function TablerGrave2Icon(
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
			<path d="M7 16.17v-9.17a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v9.171" />
			<path d="M12 7v5" />
			<path d="M10 9h4" />
			<path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGrave2Icon.displayName = "TablerGrave2Icon";
}
