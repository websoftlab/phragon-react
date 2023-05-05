import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileCogIcon = React.forwardRef<SVGSVGElement, TablerFileCogIconProps>(function TablerFileCogIcon(
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
			<path d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M9 14 A3 3 0 0 1 6 17 A3 3 0 0 1 3 14 A3 3 0 0 1 9 14" />
			<path d="M6 10v1" />
			<path d="M6 17v1" />
			<path d="M10 14H9" />
			<path d="M3 14H2" />
			<path d="m9 11-.88.88" />
			<path d="M3.88 16.12 3 17" />
			<path d="m9 17-.88-.88" />
			<path d="M3.88 11.88 3 11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileCogIcon.displayName = "TablerFileCogIcon";
}
