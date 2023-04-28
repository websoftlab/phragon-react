import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWifi1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWifi1Icon = React.forwardRef<SVGSVGElement, TablerWifi1IconProps>(function TablerWifi1Icon(
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
			<path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWifi1Icon.displayName = "TablerWifi1Icon";
}
