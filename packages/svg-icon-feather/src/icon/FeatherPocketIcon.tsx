import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherPocketIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherPocketIcon = React.forwardRef<SVGSVGElement, FeatherPocketIconProps>(function FeatherPocketIcon(
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
			<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
			<polyline points="8 10 12 14 16 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherPocketIcon.displayName = "FeatherPocketIcon";
}
