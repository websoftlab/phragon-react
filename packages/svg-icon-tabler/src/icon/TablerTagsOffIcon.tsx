import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTagsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTagsOffIcon = React.forwardRef<SVGSVGElement, TablerTagsOffIconProps>(function TablerTagsOffIcon(
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
			<path d="M6 6h-.975a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834c.028 -.028 .055 -.056 .08 -.085" />
			<path d="M17.573 18.407l.418 -.418m2 -2l.419 -.419a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
			<path d="M6 9h-.01" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTagsOffIcon.displayName = "TablerTagsOffIcon";
}
