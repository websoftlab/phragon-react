import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVideoOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVideoOffIcon = React.forwardRef<SVGSVGElement, TablerVideoOffIconProps>(function TablerVideoOffIcon(
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
			<path d="M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8" />
			<path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z" />
			<path d="M2 2 L22 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVideoOffIcon.displayName = "TablerVideoOffIcon";
}
