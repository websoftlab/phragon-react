import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNfcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNfcIcon = React.forwardRef<SVGSVGElement, TablerNfcIconProps>(function TablerNfcIcon(props, ref) {
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
			<path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" />
			<path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" />
			<path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNfcIcon.displayName = "TablerNfcIcon";
}
