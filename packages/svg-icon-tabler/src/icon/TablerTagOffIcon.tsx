import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTagOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTagOffIcon = React.forwardRef<SVGSVGElement, TablerTagOffIconProps>(function TablerTagOffIcon(
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
			<path d="M7.792 7.793a1 1 0 0 0 1.414 1.414" />
			<path d="M4.88 4.877a2.99 2.99 0 0 0 -.88 2.123v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l2.416 -2.416m2 -2l.416 -.416a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-2.859" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTagOffIcon.displayName = "TablerTagOffIcon";
}
