import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNumber8IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNumber8Icon = React.forwardRef<SVGSVGElement, TablerNumber8IconProps>(function TablerNumber8Icon(
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
			<path d="M12 8m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M12 16m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNumber8Icon.displayName = "TablerNumber8Icon";
}
