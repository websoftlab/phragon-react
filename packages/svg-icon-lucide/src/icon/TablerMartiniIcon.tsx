import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMartiniIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMartiniIcon = React.forwardRef<SVGSVGElement, TablerMartiniIconProps>(function TablerMartiniIcon(
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
			<path d="M8 22h8" />
			<path d="M12 11v11" />
			<path d="m19 3-7 8-7-8Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMartiniIcon.displayName = "TablerMartiniIcon";
}
