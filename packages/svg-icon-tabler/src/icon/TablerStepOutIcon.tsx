import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStepOutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStepOutIcon = React.forwardRef<SVGSVGElement, TablerStepOutIconProps>(function TablerStepOutIcon(
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
			<path d="M12 3l0 12" />
			<path d="M16 7l-4 -4" />
			<path d="M8 7l4 -4" />
			<path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStepOutIcon.displayName = "TablerStepOutIcon";
}
