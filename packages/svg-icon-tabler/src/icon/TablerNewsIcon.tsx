import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNewsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNewsIcon = React.forwardRef<SVGSVGElement, TablerNewsIconProps>(function TablerNewsIcon(props, ref) {
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
			<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
			<path d="M8 8l4 0" />
			<path d="M8 12l4 0" />
			<path d="M8 16l4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNewsIcon.displayName = "TablerNewsIcon";
}
