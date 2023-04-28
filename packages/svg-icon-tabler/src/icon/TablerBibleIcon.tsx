import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBibleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBibleIcon = React.forwardRef<SVGSVGElement, TablerBibleIconProps>(function TablerBibleIcon(
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
			<path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
			<path d="M19 16h-12a2 2 0 0 0 -2 2" />
			<path d="M12 7v6" />
			<path d="M10 9h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBibleIcon.displayName = "TablerBibleIcon";
}
