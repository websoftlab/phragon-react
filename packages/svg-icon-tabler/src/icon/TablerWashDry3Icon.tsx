import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashDry3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashDry3Icon = React.forwardRef<SVGSVGElement, TablerWashDry3IconProps>(function TablerWashDry3Icon(
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
			<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
			<path d="M12 12h.01" />
			<path d="M9 12h.01" />
			<path d="M15 12h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWashDry3Icon.displayName = "TablerWashDry3Icon";
}
