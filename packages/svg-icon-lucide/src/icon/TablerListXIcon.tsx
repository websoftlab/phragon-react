import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListXIcon = React.forwardRef<SVGSVGElement, TablerListXIconProps>(function TablerListXIcon(
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
			<path d="M11 12H3" />
			<path d="M16 6H3" />
			<path d="M16 18H3" />
			<path d="m19 10-4 4" />
			<path d="m15 10 4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerListXIcon.displayName = "TablerListXIcon";
}
