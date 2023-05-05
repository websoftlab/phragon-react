import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSliceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSliceIcon = React.forwardRef<SVGSVGElement, TablerSliceIconProps>(function TablerSliceIcon(
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
			<path d="m8 14-6 6h9v-3" />
			<path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSliceIcon.displayName = "TablerSliceIcon";
}
