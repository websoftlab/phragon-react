import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWifi0IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWifi0Icon = React.forwardRef<SVGSVGElement, TablerWifi0IconProps>(function TablerWifi0Icon(
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
			<path d="M12 18l.01 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWifi0Icon.displayName = "TablerWifi0Icon";
}
