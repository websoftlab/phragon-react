import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKarateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKarateIcon = React.forwardRef<SVGSVGElement, TablerKarateIconProps>(function TablerKarateIcon(
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
			<path d="M18 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M3 9l4.5 1l3 2.5" />
			<path d="M13 21v-8l3 -5.5" />
			<path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKarateIcon.displayName = "TablerKarateIcon";
}
