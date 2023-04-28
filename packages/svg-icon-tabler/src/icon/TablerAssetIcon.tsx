import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAssetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAssetIcon = React.forwardRef<SVGSVGElement, TablerAssetIconProps>(function TablerAssetIcon(
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
			<path d="M9 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
			<path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14.218 17.975l6.619 -12.174" />
			<path d="M6.079 9.756l12.217 -6.631" />
			<path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAssetIcon.displayName = "TablerAssetIcon";
}
